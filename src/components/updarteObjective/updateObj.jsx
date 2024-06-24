import { useLoaderData, useParams } from "react-router-dom";
import Details from "../createNew/objectiveDetail";

export default function UpdateObj() {
    const { id } = useParams();
    const { objectives } = useLoaderData();
    const objective = objectives.find(objective => objective.id === id)
    return (
        <>
            {objective && (
                <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75" >
                    <div className="mx-auto">
                        <Details objective={objective} isEditing={true}/>
                    </div>
                </div>
            )}
        </>
    )
};
