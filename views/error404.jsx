const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404-cat.jpg" alt="cat on his back with black background surounded by autumn leaves" />
                    <div>
                        Photo by <a href="https://unsplash.com/@cravethebenefits?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = Error404
