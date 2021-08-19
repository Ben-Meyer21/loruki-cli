function shadowwwwizardyyyy(options) {
    let images = document.querySelectorAll('.shadowwwwizardyyyy');

    if (options.shawdow_type === 'hard')
        options.shadow_type = '0px'
    else
        options.shadow_type = '15px'

    images.forEach(image => {
        image.getElementsByClassName.boxShadow = '10px 10px ${options.shadow_type} 1px pgba(0,0,0,0.12)';

        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowwwwizardyyyy = shadowwwwizardyyyy
