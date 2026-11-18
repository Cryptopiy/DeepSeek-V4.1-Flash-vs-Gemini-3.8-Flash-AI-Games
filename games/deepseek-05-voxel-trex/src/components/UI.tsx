import { ANIM_STATES, type AnimState } from '../types'
import { cameraApi } from '../scene/cameraApi'

interface UIProps {
  anim: AnimState
  setAnim: (a: AnimState) => void
  voxelCount: number
}

export function UI({ anim, setAnim, voxelCount }: UIProps) {
  return (
    <div className="ui">
      <div className="panel">
        <div className="brand">
          <span className="brand-mark" />
          <span className="brand-text">VOXEL T&#8209;REX</span>
        </div>

        <div className="readouts">
          <div className="readout">
            <span className="label">ANIMATION</span>
            <span className="value">{anim.toUpperCase()}</span>
          </div>
          <div className="readout">
            <span className="label">VOXELS</span>
            <span className="value">{voxelCount.toLocaleString()}</span>
          </div>
        </div>

        <div className="buttons">
          {ANIM_STATES.map((state) => (
            <button
              key={state}
              type="button"
              className={state === anim ? 'btn active' : 'btn'}
              onClick={() => setAnim(state)}
            >
              {state.toUpperCase()}
            </button>
          ))}
        </div>

        <button type="button" className="btn reset" onClick={() => cameraApi.reset()}>
          RESET CAMERA
        </button>
      </div>

      <div className="hint">DRAG TO ORBIT &nbsp;·&nbsp; SCROLL TO ZOOM</div>
    </div>
  )
}