import { CulturesFS } from "../cultures/fs";
import { load_registry } from "../cultures/registry";
import { CulturesResourceManager } from '../cultures/resource_manager';
import { load_map, load_user_map } from './map';

export async function createGame(fs: CulturesFS, canvas: HTMLCanvasElement, custom_map?: CulturesFS) {
  const registry = await load_registry(fs);
  const resource_manager = new CulturesResourceManager(fs, registry);

  // const ofsc = new OffscreenCanvas(12000, 18000);
  canvas.width = 3000;
  canvas.height = 5000; // document.documentElement.clientHeight;

  const gl = canvas.getContext('webgl2');
  if (!gl) {
    console.warn('Context creation failed.');
    return;
  }

  // if (custom_map) {
  //   await load_user_map(custom_map, gl, resource_manager);
  // }
  await load_map('data\\maps\\campaign_01_01\\map.dat', gl, resource_manager);

  console.log('Game initialized...');
}