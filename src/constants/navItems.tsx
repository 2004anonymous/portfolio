
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
export const navItems = [
    {
        skill:"Web Development",
        color: getRandomColor(),
    },
    {
        skill:"Software Development",
        color: getRandomColor(),

    },
    {
        skill:"Python (AI, Image Processing such as Open CV)",
        color: getRandomColor(),

    },
    {
        skill:"Java",
        color: getRandomColor(),
    },
    {
        skill:"API Development",
        color: getRandomColor(),
    },
    {
        skill:"Kotlin",
        color: getRandomColor(),
    },
    {
        skill:"C++",
        color: getRandomColor(),
    },
    {
        skill:"PHP",
        color: getRandomColor(),
    },
    {
        skill:"Node.js",
        color: getRandomColor(),
    },
    {
        skill:"JavaScript",
        color: getRandomColor(),
    }
]