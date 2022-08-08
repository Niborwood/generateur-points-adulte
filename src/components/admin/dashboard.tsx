import { useEffect } from "react";
import {
  DragDropContext,
  OnDragEndResponder,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  fetchQuestions,
  reorderQuestions,
} from "../../features/quiz/quizThunks";

// COMPONENTS
import QuestionItem from "./question-item";

const Dashboard = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const handleDrag: OnDragEndResponder = (result) => {
    const resultDestinationIndex = result.destination?.index;
    const resultSourceIndex = result.source.index;
    if (resultDestinationIndex) {
      // const newQuestions = [];
      // for (const question of questions) {
      //   const { answers, ...rest } = question;
      //   newQuestions.push(rest);
      // }

      // const [removed] = newQuestions.splice(resultSourceIndex, 1);
      // newQuestions.splice(resultDestinationIndex, 0, removed);

      // dispatch(reorderQuestions(newQuestions));

      // Update the positions
      const newQuestions = questions.map((question, index) => {
        if (index === resultSourceIndex) {
          return {
            ...question,
            position: resultDestinationIndex,
          };
        }

        if (index === resultDestinationIndex) {
          return {
            ...question,
            position: resultSourceIndex,
          };
        }

        return question;
      });
    }
  };

  return (
    <div className="">
      {/* <Title title="Modifier les questions" size="5xl" /> */}
      <DragDropContext onDragEnd={handleDrag}>
        <div className="my-4">
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {questions.map((question, index) => (
                  <Draggable
                    key={question.position}
                    draggableId={question.position.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <QuestionItem
                          key={question.position}
                          question={question}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

// ANSWER ITEM

export default Dashboard;
