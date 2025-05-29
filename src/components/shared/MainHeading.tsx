
export default function MainHeading({title, subtitle}:{title: string, subtitle:string}) {
    return (
        <div className="">
            <h6 className="p-2 bg-green/10 text-green font-medium max-w-[212px] rounded-2xl my-2">{subtitle}</h6>
            <h1 className="text-5xl lg:text-[80px] font-bold">{title}</h1>
        </div>
    )
}
