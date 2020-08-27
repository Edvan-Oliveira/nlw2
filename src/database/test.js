const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async db => {
    // Inserir dados
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: 995424554,
        bio: 'Intrutor de Química',
    }

    classValue = {
        subject: 1,
        cost: '1000',
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrasmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })
    
    // Consultar os dados inseridos
    
    // todos os proffys
    const selectedProffys = await db.all('SELECT * FROM proffys')
    // console.log(selectedProffys)

    // consular as classes de um determiando professor
    // e trazer junto todos os dados do professor 

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM classes 
        JOIN proffys ON (classes.proffy_id = proffys.id);
        WHERE classes.proffy_id = 1;
    `)
    
    // console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 600
        AND class_schedule.time_to > 600
    `)

    console.log(selectedClassesSchedules)
})