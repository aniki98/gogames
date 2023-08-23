document.addEventListener('DOMContentLoaded', () => {

    function addRelevantPaddingToSectionHero() {
        const sectionHero = document.querySelector('.hero');
        const clientHeight = document.documentElement.clientHeight;

        const sectionHeroPaddingToAdd = clientHeight - 742;
        sectionHero.style.paddingBottom = `${sectionHeroPaddingToAdd}px`;
    }
    addRelevantPaddingToSectionHero();

    window.addEventListener('resize', () => {
        addRelevantPaddingToSectionHero();
    });

});