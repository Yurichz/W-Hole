const ANIM_ITEMS = document.querySelectorAll(".anim")

if(ANIM_ITEMS.length > 0){
    window.addEventListener('scroll',ScrollAnim)
    function ScrollAnim () {
        for (let i = 0; i < ANIM_ITEMS.length; i++) {
            const ANIM_ITEM = ANIM_ITEMS[i]
            const ANIM_ITEM_HEIGHT = ANIM_ITEM.offsetHeight
            const ANIM_ITEM_OFFSET = offset(ANIM_ITEM).top
            const ANIM_START = 3

            let ItemPoint = window.innerHeight - ANIM_ITEM_HEIGHT / ANIM_START

            if(ANIM_ITEM_HEIGHT > window.innerHeight){
                ItemPoint = window.innerHeight - window.innerHeight / ANIM_START
            }

            if(( scrollY > ANIM_ITEM_OFFSET - ItemPoint) &&  scrollY < (ANIM_ITEM_HEIGHT + ANIM_ITEM_OFFSET)){
                ANIM_ITEM.classList.add('active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop =  window. scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop }
    }
    ScrollAnim()
}