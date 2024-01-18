document.addEventListener("DOMContentLoaded", function() {
    const exerciseSection = document.getElementById("exercise-section");

    function addExercise(day, exercise, sets, reps, gifUrl) {
        const exerciseDiv = document.createElement("div");
        exerciseDiv.classList.add("exercise");

        const title = document.createElement("h2");
        title.textContent = `${day}: ${exercise}`;
        exerciseDiv.appendChild(title);

        const details = document.createElement("p");
        details.textContent = `Sets: ${sets} | Reps: ${reps}`;
        exerciseDiv.appendChild(details);

        const gif = document.createElement("img");
        gif.src = gifUrl;
        exerciseDiv.appendChild(gif);

        exerciseSection.appendChild(exerciseDiv);
    }

    // Example exercises
    addExercise("Day 1", "Barbell Bench Press", "4 sets", "6-8 reps", "https://media.tenor.com/0hoNLcggDG0AAAAM/bench-press.gif");
    addExercise("Day 1", "Overhead Press", "3 sets", "8-10 reps", "https://media.tenor.com/T_vqvD5qG-YAAAAM/shoulder-press-seated-shoulder-press.gif");
    addExercise("Day 1", "Incline Dumbbell Press", "3 sets", "10-12 reps", "https://media.tenor.com/mXQJeQyJCi4AAAAM/bench-press-regular-bench-press.gif");
    // Add other exercises for Day 1...

    addExercise("Day 2", "Deadlifts", "4 sets", "5-7 reps", "https://media.tenor.com/T-L7dxrLv7EAAAAM/workouts-deadlift.gif");
    addExercise("Day 2", "Pull-Ups or Lat Pulldowns", "3 sets", "8-10 reps", "https://media.tenor.com/qtzW-FmnBOQAAAAj/lat-pull-down-machine.gifll_ups.gif");
    addExercise("Day 2", "Barbell Rows", "3 sets", "8-10 reps", "https://media.tenor.com/qVxeKiV_ZG4AAAAM/weights-skinny-guy.gif");
    // Add other exercises for Day 2...

    addExercise("Day 3", "Squats", "4 sets", "8-10 reps", "https://media.tenor.com/Pfj8vy41k-0AAAAM/gym.gif");
    addExercise("Day 3", "Romanian Deadlifts", "3 sets", "10-12 reps", "https://post.healthline.com/wp-content/uploads/2019/09/400x400_What%E2%80%99s_the_Difference_Between_Deadlifts_and_Squats_and_Which_Is_Better_for_Building_Lower_Body_Strength_Deadlift.gif");
    addExercise("Day 3", "Leg Press", "3 sets", "12-15 reps", "https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif");
    // Add other exercises for Day 3...
});
