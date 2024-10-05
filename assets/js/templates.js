export function responsiveGalleryItem(item) {
    return `
<div class="${item['containerClass']}">
    <div class="${item['galleryClass']}">
        <a target="_blank" href="${item['anchor']['href']}">
            <img src="${item['image']['src']}" alt="${item['image']['alt']}" width="${item['image']['width']}" height="${item['image']['height']}">
        </a>
    </div>
</div>
`
}