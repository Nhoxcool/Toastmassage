function showSuccessToast() {
    toast({
        title: 'Thành công! ',
        message: 'Bạn đã đăng ký thành công',
        type: 'success',
        duration: 1000
    });           
}

function ShowErrorToast() {
    toast({
        title: 'Thất Bại! ',
        message: 'Bạn đã đăng ký không thành công! Vui lòng xem lại!',
        type: 'error',
        duration: 1000
    });           
}


function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if( main ) {
        const toast = document.createElement('div');

        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info:'fa-solid fa-circle-info',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-exclamation'
        };

        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `SlideInleft ease .5s, Fadeout linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
            <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__tittle">${title}</h3>
                <p class="toast__message">${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>                
    `;
    main.appendChild(toast);
    }
}