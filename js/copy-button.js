// Copy button functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(codeBlock) {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Add copy functionality
        copyButton.addEventListener('click', function() {
            const code = codeBlock.querySelector('code');
            const text = code ? code.textContent : codeBlock.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(text).then(function() {
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                copyButton.textContent = 'Failed';
                
                // Reset button after 2 seconds
                setTimeout(function() {
                    copyButton.textContent = 'Copy';
                }, 2000);
            });
        });
        
        // Add button to code block
        codeBlock.appendChild(copyButton);
        
        // Show button on hover
        codeBlock.addEventListener('mouseenter', function() {
            copyButton.style.opacity = '1';
        });
        
        codeBlock.addEventListener('mouseleave', function() {
            copyButton.style.opacity = '0';
        });
    });
});

// Alternative implementation using Clipboard.js (if available)
if (typeof ClipboardJS !== 'undefined') {
    const clipboard = new ClipboardJS('.copy-button', {
        text: function(trigger) {
            const codeBlock = trigger.parentElement;
            const code = codeBlock.querySelector('code');
            return code ? code.textContent : codeBlock.textContent;
        }
    });
    
    clipboard.on('success', function(e) {
        const button = e.trigger;
        const originalText = button.textContent;
        
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
        
        e.clearSelection();
    });
    
    clipboard.on('error', function(e) {
        const button = e.trigger;
        const originalText = button.textContent;
        
        button.textContent = 'Failed';
        
        setTimeout(function() {
            button.textContent = originalText;
        }, 2000);
    });
}