// Set class on body based on URL
document.addEventListener('DOMContentLoaded', function() {
    if(window.location.href.match('/design/')){
        document.body.classList.add("adocs-design");
    }
    if(window.location.href.match('/teknologi/')){
        document.body.classList.add("adocs-teknologi");
    }
    if(window.location.href.match('/innhold/')){
        document.body.classList.add("adocs-innhold");
    }

    // Initialize PhotoSwipe for content images
    initPhotoSwipe();
});

function initPhotoSwipe() {
    // Import PhotoSwipe modules
    import('/js/photoswipe-lightbox.esm.js').then(module => {
        const PhotoSwipeLightbox = module.default;
        
        // Initialize PhotoSwipe ONLY for links that contain images
        const lightbox = new PhotoSwipeLightbox({
            gallery: '.content-prose, figur',
            children: 'a:has(img)', // Only target links that contain images
            pswpModule: () => import('/js/photoswipe.esm.js')
        });
        
        // Fallback for browsers that don't support :has() selector
        // We'll manually filter the elements
        lightbox.addFilter('gallery', (gallery) => {
            return gallery.filter(element => {
                // Only include links that contain an img element
                return element.querySelector('img') !== null;
            });
        });
        
        // Add custom data parsing for image dimensions
        lightbox.addFilter('itemData', (itemData, index) => {
            const linkEl = itemData.element;
            const img = linkEl.querySelector('img');
            
            // Only proceed if this link contains an image
            if (!img) {
                return null; // Skip this item
            }
            
            // Get image dimensions from the full-size image URL
            const href = linkEl.getAttribute('href');
            if (href) {
                itemData.src = href;
            }
            
            // Try to get dimensions, fallback to defaults
            if (img.naturalWidth && img.naturalHeight) {
                itemData.w = img.naturalWidth;
                itemData.h = img.naturalHeight;
            } else {
                // Load the image to get dimensions
                const tempImg = new Image();
                tempImg.onload = function() {
                    itemData.w = tempImg.width;
                    itemData.h = tempImg.height;
                };
                tempImg.src = href || img.src;
                
                // Set fallback dimensions
                itemData.w = 1200;
                itemData.h = 800;
            }
            
            return itemData;
        });
        
        lightbox.init();
    }).catch(error => {
        console.error('Failed to load PhotoSwipe:', error);
    });
}