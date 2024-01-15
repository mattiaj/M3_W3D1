let bookmarks = document.querySelectorAll("i.fa-regular.fa-bookmark");

    for (const bookmark of bookmarks) {
        bookmark.addEventListener("mouseenter", (element)=>{
            element.target.classList.remove('fa-regular');
            element.target.classList.add('fa-solid');
        })
        bookmark.addEventListener("mouseleave", (element)=>{
            element.target.classList.remove('fa-solid');
            element.target.classList.add('fa-regular');
        })
    }
