import Character from "./Character";


function Characters({isLoading, items}) {

    console.log(isLoading, items)

    return isLoading ? (<div className="shapes-1"></div> ):(

            <div className="characters">
                {items.map(item=>(
                    <Character item={item} />
                ))}
            </div>
                
                
    );
}

export default Characters;