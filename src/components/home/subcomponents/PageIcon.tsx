export default function PageIcon()
{
    const tempProp = "temp-name";

    return (
        <div>
            <img id={`icon-${tempProp}`} width="48px" height="48px"/>
            <p>App Name</p>
        </div>
    )
}