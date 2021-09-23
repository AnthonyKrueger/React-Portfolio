import {useState} from 'react';

export default function ProjectImage({src}) {
    const [loaded, setLoaded] = useState(false)

    return       <div>
    {loaded ? null :
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-theme-purple"></div>
    }
    <img
      style={loaded ? {} : {display: 'none'}}
      alt="Project"
      src={src}
      onLoad={() => setLoaded(true)}
    />
  </div>
}