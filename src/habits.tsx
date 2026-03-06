type Habit = {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    days: number;
    lastDone: Date;
    lastUpdate: Date;
}

type HabitProps ={
    habits: Habit[];
}

export default function Habits({habits}: HabitProps){

    return(
        <div className="w-full  max-w-md p-4 bg-white rounded-lg shadow-md mt-8 ml-8">
            <h1 className="text-2xl font-bold mb-4 text-black text-left">Habits</h1>
            <ul className="space-y-4 list-disc pl-5">
                {habits.map((habit:Habit)=> (
                    <li className="flex items-center justify-start" key={habit._id}>
                        <span className="text-black">{habit.title}</span>
                        <progress className="w-24" value="50" max="100"></progress>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hecho</button>
                    </li>
                ))}
            </ul>   
        </div>
    );
}
