document.getElementById('iprojetos').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    const projectsSection = document.getElementById('projetos');
    if (projectsSection.classList.contains('show')) {
        projectsSection.classList.remove('show');
    } else {
        projectsSection.classList.add('show');
    }
});