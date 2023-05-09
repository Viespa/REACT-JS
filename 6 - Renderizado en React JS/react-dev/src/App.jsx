import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";
import styles from './App.module.css';

const App = () => (
    <div className={styles.container}>
        <VideoList title='Curso de React'>
            <VideoItem 
                title='Componentes' 
                duration={2760} 
                upldoadDate={new Date(2023, 2, 30)}
                description="Componentes en react" >
            </VideoItem>
            <VideoItem 
                title='UseState' 
                duration={3145} 
                upldoadDate={new Date(2024, 5, 3)} 
                description="Como utilizar estados en react" >
            </VideoItem>
        </VideoList>
        <VideoList title='Curso de React'>
        <VideoItem 
            title='Componentes' 
            duration={2760} 
            upldoadDate={new Date(2023, 2, 30)}
            description="Componentes en react" >
        </VideoItem>
        <VideoItem 
            title='UseState' 
            duration={3145} 
            upldoadDate={new Date(2024, 5, 3)} 
            description="Como utilizar estados en react" >
        </VideoItem>
    </VideoList>
    <VideoList title='Curso de React'>
       
    </VideoList>
</div>
    
);

export default App;