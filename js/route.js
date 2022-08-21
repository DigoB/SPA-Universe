export class Router {

    add(routeName, page) {
        this.route[routeName] = page
    }


    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
    }

    handle() {

        const { pathname } = window.location

        const route = this.route[pathname] || this.route["error"]

        fetch(route)
        .then(data => data.text())
        .then(html => { 
            document.querySelector('#page').innerHTML = html
        })
    }

    
}