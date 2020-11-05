export function removeChildren(container) {
    while (container.firstChild)
    container.removeChild(container.firstChild);
}

export function getLastNumber(url) {
    let end = url.lastIndexOF('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start,end)
}

