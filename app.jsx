#!/usr/bin/env -S ags run

import app from "ags/gtk4/app"
import { Gtk } from "ags/gtk4"

function Button( label, icon ) {
  return (
    <box 
      halign={Gtk.Align.CENTER}
      valign={Gtk.Align.CENTER} 
      orientation={Gtk.Orientation.VERTICAL}
      class="button"
    >
      <label class="buttonIcon" label={icon} />
      <label class="buttonLabel" label={label} />
    </box>
  )
}

app.apply_css("./style.css")
app.start({
  main() {
    return (
      <window class="window" visible>
        <box>
          {Button("Ya furry", "")}
        </box>
      </window>
    )
  }
})
