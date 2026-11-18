import './style.css';

const container = document.querySelector<HTMLDivElement>('#viewport');
if (!container) throw new Error('No container found');

console.log('Viewport found: ', container);