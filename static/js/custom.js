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
        
        // Initialize PhotoSwipe ONLY for links that point to image files
        const lightbox = new PhotoSwipeLightbox({
            gallery: '.content-prose, figur',
            children: 'a', // Target all links initially, but filter them below
            pswpModule: () => import('/js/photoswipe.esm.js')
        });
        
        // Function to check if a URL points to an image file
        function isImageUrl(url) {
            if (!url) return false;
            const imageExtensions = /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i;
            return imageExtensions.test(url.split('?')[0]); // Remove query parameters before checking
        }
        
        // Filter to only include links that contain images AND point to image files
        lightbox.addFilter('gallery', (gallery) => {
            return gallery.filter(element => {
                // Must contain an img element
                const hasImg = element.querySelector('img') !== null;
                if (!hasImg) return false;
                
                // Must point to an image file
                const href = element.getAttribute('href');
                return isImageUrl(href);
            });
        });
        
        // Add custom data parsing for image dimensions
        lightbox.addFilter('itemData', (itemData, index) => {
            const linkEl = itemData.element;
            const img = linkEl.querySelector('img');
            const href = linkEl.getAttribute('href');
            
            // Only proceed if this link contains an image AND points to an image file
            if (!img || !isImageUrl(href)) {
                return null; // Skip this item
            }
            
            // Set the image source
            itemData.src = href;
            
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
                tempImg.src = href;
                
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