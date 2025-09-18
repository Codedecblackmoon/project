import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useParams } from "react-router-dom";

const StoryPage = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();

  const stories = {
    "too-small": {
      title: "You're too small",
      pages: [
        {
          text: "Mama Tau was coming home! She had been away for a long time studying, and her family missed her. Everyone was very excited. But Thapelo, the youngest of all her children, was the most excited.",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "On the day of Mama Tau’s arrival, the family spent the morning preparing. The sun was shining outside. Thapelo kicked his ball around on the grass. He wanted to show his mother how much better his soccer was since the last time she had seen him. “Catch this one, Bless,” he shouted to the dog. But Bless just looked at the ball and went inside.",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "Thapelo followed the dog and went to find his older sister, Refilwe. Refilwe was a DJ. She was so cool that she wore her sunglasses even inside the house. Refilwe was in her room getting music to play for when Mama walked through the front door. “I’m not going to play any of that rap she complains about,” Refilwe said. “Today we will only hear jazz. Just how Mama likes it.” She took off her sunglasses and winked at Thapelo. “Maybe you can dance with Mama.”",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "Then Refilwe put on her headphones and started nodding her head to the music. “Can I help you?” asked Thapelo.“What?” said Refilwe, taking off her headphones. “What did you say?” “Can I help you?” Thapelo shouted. “No need to shout,” Refilwe said. “I can hear you perfectly.” Then she shook her head. “This is all on the computer, Thapelo. So, you can’t help. You’re too small.",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "Thapelo went to find his brother, Saul. He was in the kitchen, baking one of his very special cakes. Whenever there was a special occasion, Saul made a cake. For Thapelo’s last birthday, he had made a chocolate cake with Smarties on top. Saul was wearing a striped apron and was stirring the cake mixture in a big bowl.“This is a lemon cake,” he told Thapelo. “Mama’s favourite.” “Can I help you?” asked Thapelo.",
          image: "/books_Upload/Too small 2.png",
        },
        {
          text: "“No,” he said. “Last time you dropped an egg. Sorry, Thapelo. You’re too small.” He went to find his other sister, Mampotoko, who was putting up decorations in the lounge. There were paper chains and balloons. “Can I help you?” he asked. “Here, see if you can blow these up,” she said, handing Thapelo some balloons. He chose a red one and started blowing. He tried and he tried but he couldn’t get enough air into it. “Oh no,” he said sadly. “I’m too small.” ",
          image: "/books_Upload/Too small 2.png",
        },
        {
          text: "“So Thapelo went to find Ntate. He was sitting at the table, wrapping up a bead necklace for Mama. “This necklace has her favourite colours,” he said. “Purple and green. Isn’t it beautiful?” Thapelo saw the wrapping paper with stars on it. “Can I help you wrap the necklace?” asked Thapelo. “No, sorry, Thapelo, you’re too small,” his father said. Thapelo felt sad. He looked at their dog, Bless, sitting next to Ntate. “Come, Bless,” he called. But Bless just sat there. “Even Bless thinks I’m too small,” Thapelo thought.",
          image: "/books_Upload/Too small 2.png",
        },
        {
          text: "Thapelo went outside and sat on the front step. “I wish I could grow as tall as a giant,” he thought. “Then they’d all be scared of me and nobody would say, ‘You’re too small.’” Just then he heard a loud shout from inside the house. “Bless! Bless, come back!” Bless ran past Thapelo and around the corner of the house. And after Bless ran Ntate. Then Saul. Then Refilwe. And then Mampotoko. “That dog has stolen Mama’s present!” Ntate shouted as he passed Thapelo. Thapelo joined them and ran after Bless too.",
          image: "/books_Upload/Too small 2.png",
        },
        {
          text: "Bless jumped through a hole in the fence, into the yard next door. “Come back, Bless!” they called. And after a while Bless did come back … but without the present! “Oh no, he’s left it next door!” Ntate groaned. “And the Sitholes are away till tomorrow! So, it’s stuck on the other side of the fence till they come back!” “I could climb through the hole and fetch it,” suggested Thapelo. “No,” they all said together. “You’re too …” They stopped. They looked at Thapelo. “Will you fit?” asked Refilwe.",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "“Are you small enough?” asked Saul. Thapelo crouched down and squeezed himself through the hole. He just fitted through. There, on the grass in the Sithole’s yard, was the wrapped present, with just a little bit of the wrapping paper torn. He picked up the present and squeezed back to the other side of the fence. “Oh, Thapelo,” said Ntate. “You are a star!” “Three cheers for Thapelo!” Saul said, and they all hugged him.",
          image: "/books_Upload/Too small 1.png",
        },
        {
          text: "Later that afternoon there was a knock on the door. It was Mama! Thapelo rushed into her arms. “How you’ve grown, my boy,” she said. “Look at how tall you are now.” “But I’m still too small, Mama,” he said. “No!” everyone shouted. “No, you’re not!” said Ntate, “You’re just the right size!” ",
          image: "/books_Upload/Too small 1.png",
        },
      
      ],
    },
    "thokos-library": {
      title: "Thoko's first library book",
      pages: [
        {
          text: "Thoko walked into the library with Gogo. She loved the smell of books.",
          image: "/books_Upload/thoko-1.png",
        },
        {
          text: "The librarian, Mrs. Molefe, smiled. 'Pick any book you like.'",
          image: "/books_Upload/thoko-2.png",
        },
        {
          text: "Thoko whispered in awe, 'Any book?'",
          image: "/books_Upload/thoko-3.png",
        },
        {
          text: "She picked 'The Girl Who Sailed the Stars' — a story full of dreams.",
          image: "/books_Upload/thoko-4.png",
        },
          {
          text: "",
          image: "/books_Upload/too-small-6.png",
        },
        {
          text: "",
          image: "/books_Upload/too-small-6.png",
        },
        {
          text: "",
          image: "/books_Upload/too-small-6.png",
        },
      ],
    },
  };

  const story = stories[storyId as keyof typeof stories];
  const [page, setPage] = useState(0);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <Card className="p-6 text-center">
          <h1 className="text-xl font-bold text-orange-600 mb-4">Story Not Found</h1>
          <Button
            onClick={() => navigate("/student-dashboard")}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const currentPage = story.pages[page];

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-xl shadow-md mb-6 flex justify-between items-center">
        <Button
          variant="outline"
          className="bg-white text-orange-600"
          onClick={() => navigate("/student-dashboard")}
        >
          ← Back
        </Button>
        <h1 className="text-xl font-bold">{story.title}</h1>
        <span className="text-2xl">📖</span>
      </header>

      {/* Story Card */}
      <Card className="p-6 max-w-3xl mx-auto text-center shadow-lg">
        <img
            src={currentPage.image}
            alt={`Page ${page + 1}`}
            className="w-full max-h-92 h-96 object-cover mx-auto rounded-xl border-4 border-orange-100 shadow-lg mb-6"
        />
        <div className="bg-white p-6 rounded-lg shadow-inner min-h-48 flex items-center justify-center mb-6">
          <p className="text-lg leading-relaxed">{currentPage.text}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="bg-orange-500 disabled:bg-gray-300"
          >
            Previous
          </Button>
          <span className="text-gray-600">
            Page {page + 1} of {story.pages.length}
          </span>
          <Button
            onClick={() =>
              page < story.pages.length - 1
                ? setPage((p) => p + 1)
                : navigate("/progress")
            }
            className="bg-orange-500"
          >
            {page === story.pages.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
        <Progress
          value={((page + 1) / story.pages.length) * 100}
          className="h-2"
        />
      </Card>
    </div>
  );
};

export default StoryPage;
