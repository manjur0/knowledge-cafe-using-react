import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="container mx-auto  ">
            <div className=" flex justify-between items-center border-b-2 pb-3">
                <h1 className='text-4xl font-bold mt-10 '>Knowledge cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;