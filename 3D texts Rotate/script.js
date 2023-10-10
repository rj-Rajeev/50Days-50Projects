const texts = [
    'HTML', 'CSS', 'JavaScript',
    'Node.Js', 'Rj', 'react',
    'developer', 'express','Rj', 'mongoDB',
    'python','Rj', 'v2.23.5', 'HTML', 'CSS','Rj', 'JavaScript',
    'Node.Js', 'Rj', 'react',
    'developer', 'express', 'mongoDB',
    'python','Rj', 'v2.23.5','Rj'
];

var TagCloud = TagCloud('.content', texts,{
    radius : 200,
    maxSpeed : 'fast',
    initSpeed : 'fast',
    direction : 135,
    keep : true,
});