const React = require('react')
const Def = require('../default')

function Show(data) {
    return (
        <Def>
            <main>
                <div>
                    <div>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div>
                        <div>
                            <h1>{data.place.name}</h1>
                        </div>
                        <br />
                        <div>
                            <h1>Description</h1>
                            <h3>Serving {data.place.cuisines}.</h3>
                        </div>
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                        </div>
                        <div>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show
