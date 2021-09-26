import Character from "./Character";


function Characters({isLoading, items}) {

    console.log(isLoading, items)

    return isLoading ? (<h1>Loading...</h1> ):(

            <div className="characters">
                {items.map(item=>(
                    <Character item={item} />
                ))}
            </div>
                
                
    );
}

export default Characters;