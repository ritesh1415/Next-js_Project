import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
  role: { type: String, required: true },
  resource: { type: String, required: true },
  action: { type: String, required: true },
});

const Permission= mongoose.model('Permission', PermissionSchema);
export default Permission
