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
        
        // Function to check if a URL points to an image file
        function isImageUrl(url) {
            if (!url) return false;
            const imageExtensions = /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i;
            return imageExtensions.test(url.split('?')[0]); // Remove query parameters before checking
        }
        
        // Function to check if a link should be handled by PhotoSwipe
        function isPhotoSwipeLink(element) {
            // Must contain an img element
            const hasImg = element.querySelector('img') !== null;
            if (!hasImg) return false;
            
            // Must point to an image file
            const href = element.getAttribute('href');
            return isImageUrl(href);
        }
        
        // First, add click handlers to prevent default behavior only for non-PhotoSwipe links
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.querySelector('img')) {
                // This is a link with an image
                if (!isPhotoSwipeLink(link)) {
                    // This is NOT a PhotoSwipe link (e.g., navigation link with image)
                    // Let it behave normally - don't prevent default
                    return;
                }
            }
        }, false);
        
        // Initialize PhotoSwipe with a more specific selector
        const lightbox = new PhotoSwipeLightbox({
            gallery: '.content-prose, figur',
            children: 'a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".webp"], a[href$=".gif"], a[href$=".bmp"], a[href$=".svg"]',
            pswpModule: () => import('/js/photoswipe.esm.js')
        });
        
        // Additional filtering to ensure we only handle links with images
        lightbox.addFilter('gallery', (gallery) => {
            return gallery.filter(element => {
                return isPhotoSwipeLink(element);
            });
        });
        
        // Add custom data parsing for image dimensions
        lightbox.addFilter('itemData', (itemData, index) => {
            const linkEl = itemData.element;
            const img = linkEl.querySelector('img');
            const href = linkEl.getAttribute('href');
            
            // Only proceed if this is a valid PhotoSwipe link
            if (!isPhotoSwipeLink(linkEl)) {
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