function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;
    // const imgSrc = props.imgSrc;
    // above can be written as below single line
    // const {title, handle, imgSrc} = props;

    // we can write function ProfileCard(props) as
    // function ProfileCard({ title, handle, imgSrc })
    return (
        <>
        <img src={props.imgSrc} />
        <div>Title is {props.title}</div>
        <div>Handle is {props.handle}</div>
        </>
        // <div> Title is {title}</div>
        // <div> Handle is {handle} </div>
    );
}

export default ProfileCard;