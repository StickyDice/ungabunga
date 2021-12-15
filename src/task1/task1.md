## Цель задания:

Разобраться в использовании классов, полей, модификаторов, а так же научиться использовать несложные статические методы на Typescript.

## Что нужно сделать:

На нашем форуме уже общаются пользователи! Их много и мы начали вводить правила для того, чтобы выдавать предупреждения за нарушения правил. Но следить абсолютно за всеми сообщениями - сложно, поэтому нам нужно реализовать небольшой функционал по подсчету коэффициента доверия к пользователю. У нас имеется массив тестовых пользователей, на примере которых нужно проверить работу нового функционала.

Формула подсчета коэффициента доверия:

Количество сообщений пользователя * 2 - количество выданных предупреждений * 100 + срок в днях со дня регистрации пользователя

Если коэффициент ≥ 0, то считаем, что форум доверяет пользователю.

Задачу необходимо решить с помощью классов. Реализуйте класс TrustedUser, который принимает в аргументах конструктора тип User. В этом класс мы будем хранить наш метод getConfidenceRatio, который будет возвращать коэффициент доверия для конкретного пользователя.

Ответственным за оценку самого коэффициента мы сделаем специальный статический класс-хэлпер: ConfidenceHelper, в котором статический метод checkConfidenceRatio будет проверять: является ли пользователь с данным коэффициентом доверенным.

Так как в процессе рассчета потребуется рассчитать срок регистрации на форуме, придется написать соответствующий функционал. Как это сделать - решать вам :)

В конце концов - напишите небольшое приложение, которая проверит всех пользователей в массиве users на коэффициент доверия и вернет тех, кому мы не доверяем.

## Советы и рекомендации

Для выполнения заданий рекомендуем скачать репозиторий и работать в нем. Это будет полезно для отработки навыков в реальном проекте. Ссылку на репозиторий можно найти в описании домашнего задания.

## **Формат сдачи:**

Код, отправленный в чат с проверяющим наставником или ссылка на репозиторий.

## **Критерии оценки:**

- **"Зачет":**
  - Реализованный функционал отвечает требованиям задания
  - В реализации не допущены недочеты, связанные с оформлением или использованием классов.
- **"Незачет":**
  - Не выполнен один из пунктов выше