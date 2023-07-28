import './Runner.css';
import img1 from './assets/img/image1.png';
import img2 from './assets/img/image2.png';

function Runner() {
    return (
        <div className='pont-2'>
            <div className='p-1'>
                <h1 class="h1-edit">run app</h1>
                <div className='grid-main'>
                    <div className='box time'>
                        <h3 className="h3-edit">Tiempo</h3>
                        <h2 className="tiempo">25:50</h2>
                    </div>
                    <div className='box image1'><img class="img-edit" alt="" src={img1} />
                    <h3 className="h3-edit">Correr</h3></div>
                    <div className='box image2'><img class="img-edit" alt=""  src={img2} />
                    <h3 className="h3-edit">Caminar</h3></div>
                </div>
                <div className='btn-grid'>
                <button className="btn-run b1">Continuar</button>
                <button className="btn-run b2">Terminar</button>
                </div>
        </div></div>
    )
};

export default Runner;