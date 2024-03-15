import './nav.css'
const Nav = () => {
    return (
        <div className="nav">
            <div className='logo'>Food Recipe</div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="#">Recipes</a>
                <a href="#">About</a>
                <a href="#">Search</a>
            </div>
            <div className='search-box'>
                <div>
                    <input placeholder='Search' type="text" />
                </div>

                <img src="../../src/assets/img/profile.png" alt="" />

            </div>
        </div>
    );
};

export default Nav;