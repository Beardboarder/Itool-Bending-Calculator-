# Conduit Bending Calculator

A local web app for electricians that calculates mark locations and bending instructions for:

- 90° stub-up
- Offset bend
- Back-to-back 90
- 3-point saddle
- 4-point saddle
- Kick bend

## Files

- `index.html` - UI markup
- `styles.css` - polished light-orange Apple-inspired styling
- `app.js` - conduit data, formulas, validation, diagram drawing, and localStorage support

## How to run

1. Download or copy the project folder.
2. Open `index.html` in any modern browser.
3. No build step or server is required.

## Editable conduit and bender data

The app intentionally **does not** assume one universal take-up or gain table.

Inside `app.js`, look for `DEFAULT_DATA`.
That object stores editable defaults for:

- conduit type / material
- nominal size
- bender profile
- `takeUp90`
- `gain90`
- `bendRadius`
- `minimumRadius`
- notes

You can edit the data in two ways:

1. **In the source code**
   - Edit the `DEFAULT_DATA` object in `app.js`
2. **Inside the running app**
   - Use the JSON editor in the “Editable conduit / bender data” panel
   - Click **Save to localStorage**
   - Click **Load saved** later to restore your saved data

## Accuracy and safety note

The included conduit/bender values are **editable sample defaults only**.
They are **not universal**.

Take-up, gain, radius, and field adjustment values can vary by:

- manufacturer
- bender shoe/profile
- conduit type
- conduit size
- company standard
- field practice

Verify these values against your actual bender chart, manufacturer instructions, and local/company practice before field use.

## Formula split used by the app

The code separates formulas into two categories.

### 1) Universal geometry / trigonometry

These formulas do not depend on conduit material or bender profile.

#### Offset bend

- Distance between bends:
  - `spacing = offset / sin(angle)`
- Offset multiplier:
  - `multiplier = 1 / sin(angle)`
- Shrink:
  - `shrink = offset * tan(angle / 2)`

#### Kick bend

- Travel:
  - `travel = rise / sin(angle)`
- Setback:
  - `setback = rise / tan(angle)`

#### 3-point saddle

The app uses geometric spacing from obstruction height and chosen side angle, then compares that to obstruction width and bend radius so the center section can clear the obstacle.

#### 4-point saddle

The app models a 4-point saddle as two equal offsets separated by the flat width across the obstruction.

### 2) Configurable conduit / bender data

These values come from the editable data table and must be verified for real-world use:

- `takeUp90`
- `gain90`
- `bendRadius`
- `minimumRadius`
- any custom profile notes

## Bend-type behavior summary

### 90° stub-up

Uses:

- desired stub length
- configurable `takeUp90`

Main relation:

- `mark = stubLength - takeUp90`

The generic “Length where bend should start” field was removed. Stub marks are now measured directly from the selected reference end.

### Offset bend

Uses:

- distance to start of offset from the selected reference end
- desired offset height
- selected bend angle
- universal spacing and shrink formulas

Main relations:

- `mark1 = referenceDistance - shrink`
- `mark2 = mark1 + spacing`

### Back-to-back 90

Uses:

- first stub length from the selected reference end
- a dropdown for the second 90 layout method
  - bend-to-bend distance, or
  - second stub from the opposite end
- configurable `takeUp90`
- configurable `gain90` when using bend-to-bend spacing

Main relations:

- `firstMark = firstStub - takeUp90`
- spacing mode: `secondMark = firstMark + distanceBetween90s - gain90`
- opposite-end stub mode: `secondMark = secondStub - takeUp90` measured from the opposite end

### 3-point saddle

Uses:

- distance to obstruction centerline from the selected reference end
- obstruction height
- obstruction width
- center angle
- side angle

Typical practice often uses center angle ≈ 2 × side angle. The app warns if your entries differ significantly.

### 4-point saddle

Uses:

- distance to the near edge of the obstruction from the selected reference end
- obstruction height
- obstruction width
- chosen angle
- universal offset formulas

### Kick bend

Uses:

- kick angle
- rise
- distance to bend from the selected reference end
- optional configurable gain adjustment


## Recent UI updates

- Output values now always display as fractions rounded to the nearest 1/16 inch.
- The rounding dropdown was removed and replaced with a fixed output mode card.
- The UI was restyled with a softer Apple-inspired glass look, brighter cards, and cleaner spacing.


- Removed the old generic “Length where bend should start” input.
- Added a back-to-back 90 dropdown so the second bend can be laid out by bend-to-bend spacing or by a second stub from the opposite end.
- Fixed the stock conduit assumption at **120 inches (10 ft)** for reference-end conversions, validation, and diagrams.
- Updated the calculator theme to a brighter light-orange jobsite style.
- Added diagram labels for stub height, offset height / rise, and bend angles.

## Validation included

The app validates:

- missing inputs
- negative values
- impossible or unrealistic angles
- missing conduit profile data
- mark locations that fall outside the fixed 120 in stock conduit
- suspicious field conditions such as marks before the reference end

## Example test cases

These examples assume the default sample values that ship in the app.
If you change the table, your results should change too.

### Test 1 - 3/4" EMT 90° stub-up

Inputs:

- Type: EMT
- Size: 3/4"
- Profile: Hand Bender - Sample
- Bend type: 90° stub-up
- Start distance: 0
- Desired stub length: 24
- Take-up: default 6

Expected:

- Mark 1 = 18 in from End A
- Bend angle = 90°

### Test 2 - 3/4" EMT 30° offset

Inputs:

- Type: EMT
- Size: 3/4"
- Bend type: Offset
- Start distance: 18
- Offset height: 6
- Angle: 30°

Expected approximate result:

- Multiplier = 2.0
- Spacing = 12 in
- Shrink ≈ 1.608 in
- Mark 1 ≈ 16.375 in from End A (16 3/8 in to nearest 1/16)
- Mark 2 ≈ 28.375 in from End A (28 3/8 in to nearest 1/16)

### Test 3 - 1/2" EMT back-to-back 90

Inputs:

- Type: EMT
- Size: 1/2"
- Bend type: Back-to-back 90
- Start distance: 0
- First stub length: 20
- Distance between bends: 36
- Take-up: default 5
- Gain: default 0.375

Expected approximate result:

- First mark = 15 in from End A
- Second mark = 50.625 in from End A

## Notes for future expansion

The app is structured so you can add:

- more conduit sizes
- more bend types
- more manufacturer tables
- additional adjustment factors
- more detailed diagrams
- export/import of JSON files
