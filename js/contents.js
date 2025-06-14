/*
 * Utility script used to prepare Table of Contents for article pages.
 */

function generateTableOfContents(){
    const ulsContents = document.getElementsByClassName('contents');
    const divMain = document.getElementById('main');
    if (!ulsContents || ulsContents.length === 0 || !divMain)
        return;

    const ulContents = ulsContents[0];
    const headings = divMain.querySelectorAll('div h2');

    headings.forEach((h2, index) => {
        if (!h2.id)
            h2.id = `heading-${index + 1}`;
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.appendChild(a);
        a.href = `#${h2.id}`;
        a.textContent = h2.textContent;

        ulContents.appendChild(li);
    });
}