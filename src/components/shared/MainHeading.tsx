
export default function MainHeading({title, subtitle}:{title: string, subtitle:string}) {
    return (
        <div className="">
             <h6 className="p-1 bg-green/10 w-fit px-5 rounded-[8px] text-green font-medium my-2">{subtitle}</h6>
            <h1 className="text-5xl lg:text-[80px] font-bold">{title}</h1>
        </div>
    )
}
