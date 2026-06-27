document.addEventListener('DOMContentLoaded', () => {
    // Feature Tab Switcher
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('hidden', 'true');
            });

            // Add active class to selected tab
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            // Show corresponding panel
            const panelId = tab.getAttribute('aria-controls');
            const activePanel = document.getElementById(panelId);
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.removeAttribute('hidden');
            }
        });
    });

    // Simple scroll indicator for header shrinking
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(11, 15, 25, 0.75)';
        }
    });
});
