type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-29 flex h-[255px] w-[340px] md:h-[380px] md:w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

    return (
        <>
            <li className='relative mx-5 inline-block h-[255px] w-[340px] md:h-[380px] md:w-[450px]'>
                <div className={overlayStyles}>
                    <p className='text-xl md:text-2xl'>{name}</p>
                    <p className='text-xs md:text-sm mt-2 md:mt-5'>{description}</p>
                </div>
                <img src={image} alt={`${image}`} />
            </li>
        </>
    )
}

export default Class