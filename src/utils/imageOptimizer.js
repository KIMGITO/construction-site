// utils/imageOptimizer.js - Create this utility file

export const getOptimizedImage = (url, options = {}) => {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('cloudinary.com')) return url;
  
  const {
    width = 1920,
    quality = 'auto',
    format = 'auto',
    progressive = true
  } = options;
  
  // Add Cloudinary transformations for better performance
  const separator = url.includes('?') ? '&' : '?';
  const progressiveFlag = progressive ? 'fl_progressive' : '';
  const formatParam = format !== 'auto' ? `f_${format}` : 'f_auto';
  const qualityParam = quality !== 'auto' ? `q_${quality}` : 'q_auto';
  
  let optimizedUrl = `${url}${separator}w_${width},${qualityParam},${formatParam}`;
  
  if (progressiveFlag) {
    optimizedUrl += `,${progressiveFlag}`;
  }
  
  // Add responsive breakpoints for mobile
  if (window.innerWidth <= 768) {
    optimizedUrl = optimizedUrl.replace(`w_${width}`, `w_${Math.min(768, width)}`);
  }
  
  return optimizedUrl;
};

// For responsive images across different screen sizes
export const getResponsiveImageSet = (url, options = {}) => {
  if (!url.includes('cloudinary.com')) return { src: url };
  
  const breakpoints = [640, 768, 1024, 1280, 1536];
  
  return {
    src: getOptimizedImage(url, { width: 1024, ...options }),
    srcSet: breakpoints.map(bp => 
      `${getOptimizedImage(url, { width: bp, ...options })} ${bp}w`
    ).join(', '),
    sizes: '(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw'
  };
};