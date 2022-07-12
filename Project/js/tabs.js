window.addEventListener("DOMContentLoaded",function() {
    document.querySelectorAll('.js-stages_button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click',function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.js-tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
}) 
