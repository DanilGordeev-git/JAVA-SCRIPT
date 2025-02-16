const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel(queue) {
  const person = queue.shift(); // Удаляем первого человека из очереди
  alert(
    `${person} получил(а) посылку. В очереди осталось ${queue.length} человек.`
  );
}

function leaveQueueWithoutParcel(queue) {
  const person = queue.pop(); // Удаляем последнего человека из очереди
  alert(`${person} не получил(а) посылку и ушел(ла) из очереди`);
}

// Шаг 1: Кристина и Олег получили посылки и ушли из очереди
giveParcel(peopleWaiting); // Кристина получила посылку
giveParcel(peopleWaiting); // Олег получил посылку

// Шаг 2: Кирилл получил посылку, остальные ушли
giveParcel(peopleWaiting); // Кирилл получил посылку

// Удаляем оставшихся людей, которые не получили посылки
while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel(peopleWaiting);
}
