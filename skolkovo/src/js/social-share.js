export default function () {
    const facebook = $('#facebook');
    const vkontakte = $('#vkontakte');

    facebook.on('click', function (e) {
        e.preventDefault();

        const href = $(this).attr('href');
        window.open(href, 'share-fb', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    });
    vkontakte.on('click', function (e) {
        e.preventDefault();

        const href = $(this).attr('href');
        window.open(href, 'share-vk', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    });
}
