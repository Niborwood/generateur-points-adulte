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
    const destination = result.destination?.index;
    const source = result.source.index;
    const sourceId = +result.draggableId;
    console.log(destination, source, sourceId);
    if (destination) {
      dispatch(
        reorderQuestions({
          moveDirection: source > destination ? "up" : "down",
          source,
          destination,
          sourceId,
        })
      );
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
                    draggableId={question._id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className="top-0 left-0"
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
