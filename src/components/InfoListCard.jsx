export default function InfoListCard({title, list}) {
    return (
        <div className={'w-full border-2 border-white/20 flex flex-col bg-[var(--fondo3)] text-[var(--text2)] items-center justify-center text-center'}>
            <div className="bg-[var(--fondo4)] w-full p-15 font-extrabold text-xl">
                <h1 className={''}>{title}</h1>
            </div>
            <div className="flex flex-col p-5">
                {list.map((section, index) => (
                    <div key={index}>
                        <div className="flex flex-col pt-15 pb-15">
                            <h1 className="font-bold text-xl">{section['title']}</h1>
                            <p className="text-[var(--text3)] ">{section['description']}</p>
                        </div>
                        <hr className="text-white/20"></hr>
                    </div>
                ))}
            </div>
        </div>
    )
}