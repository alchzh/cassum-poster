function playall() {
    const videos = document.getElementsByTagName("video");
    for (const video of videos) {
        video.currentTime = 0;
        video.play();
    }
}

function rewind() {
    const videos = document.getElementsByTagName("video");
    for (const video of videos) {
        video.currentTime = 0;
        video.pause();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('h4') || []).forEach(($trigger) => {
        const $target = document.createElement("div");
        $target.classList.add("modal");
        $target.innerHTML = `  <div class="modal-background"></div>

  <div class="modal-content">
    <div class="box">
      ${$trigger.parentElement.innerHTML}
    </div>
  </div>

  <button class="modal-close is-large" aria-label="close"></button></div>`;
        document.body.appendChild($target);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });
});