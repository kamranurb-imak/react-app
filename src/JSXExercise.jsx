 function sum(a, b){
        return (a+b + 100 );
    }

function JSXTask() {
    function callFunc(message) {
        alert(message);
    }

    function fruit(name) {
        return name;
    }
    function sum(a, b){
        return (a+b);
    }

    const name = 'KAMRAN';
    const type = undefined;
    const userObj = {
        id: 1,
        name: 'user 1',
        aeg: 20
    }
    const userArray = ['user1', 'user2', 'user3'];
    const x=10;
    const y=6;
    let z = x+y;
    z = z+1;
    return (
        <div>
            <h1> {name? name : "User does not exist"}</h1>
            <h1> {type? type : "Type does not exist"}</h1>
            <input type="text" value={name} id={name} />
            <h2> value {z} </h2>
            <img src="" alt="image not found" class="photo" />
            <ul>
                <li>Invent 1</li>
                <li>Invent 2</li>
                <li>Invent 32</li>
            </ul>
            <br />
            USER OBJECT VALUE: {userObj.name} <br />
            USER Array second VALUE: {userArray[1]} <br />
            FRUIT: {fruit('APPLE')} <br/> <br/>
            SUM: {sum(1, 5)}
            <br/> <br/>
            <button type="submit" onClick={() => callFunc('Function called')}>Click me</button>

        </div>
    )
}

export default JSXTask